import React from 'react';

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    };
  }

  upperCasefy({ target }) {
    if (target.type !== 'select') target.value.toUpperCase();
  }

  displayErrorMessage(show, siblingElement, markup = '') {
    const errorSpan = siblingElement.parentElement.querySelector('.error');
    if (show && !errorSpan) {
      siblingElement.insertAdjacentHTML('afterend', markup);
      console.log('Caracter especial detectado - errorSpan não estava criada');
      return;
    }
    if (show && errorSpan) {
      console.log('Caracter especial detectado - errorSpan detectada');
      return;
    }
    if (!show) {
      console.log('Caracter especial não detectado - retornando a função');
      return;
    }
  }

  validateCPF({ target }, msgHandler) {
    let { value } = target;
    const lastChar = value[value.length - 1];
    const markup = `<span class="error" style="color: red;">Digite apenas números</span>`;
    if (!Number(lastChar)) {
      msgHandler(true, target, markup);
      target.value = value.slice(0, -1);
    }
    msgHandler(false, target);
  }

  validateAddress({ target }, msgHandler) {
    let { value } = target;
    const lastChar = value[value.length - 1];
    const markup = `<span class="error" style="color: red;">Não use caracteres especiais no endereço (!, @, #, $, %, ¨, &, *, +)</span>`;
    const nonAllowedChars = '!, @, #, $, %, ¨, &, *, +'.split(', ');
    nonAllowedChars.forEach((char) => {
      if (char === lastChar) {
        msgHandler(true, target, markup);
        target.value = value.slice(0, -1);
      }
    });
  }

  validateCity({ target }, msgHandler) {
    const markup = `<span class="error" style="color: red;">O nome da cidade não pode começar com números</span>`;
    if (Number(target.value[0]) || Number(target.value[0]) === 0) {
      console.log('cidade que começa com número');
      target.value = '';
      msgHandler(true, target, markup);
    }
  }

  brazilianStates() {
    const brazilStates = [
      'Acre',
      'Alagoas',
      'Amapá',
      'Amazonas',
      'Bahia',
      'Ceará',
      'Distrito Federal',
      'Espirito Santo',
      'Goiás',
      'Maranhão',
      'Mato Grosso do Sul',
      'Mato Grosso',
      'Minas Gerais',
      'Pará',
      'Paraíba',
      'Paraná',
      'Pernambuco',
      'Piauí',
      'Rio de Janeiro',
      'Rio Grande do Norte',
      'Rio Grande do Sul',
      'Rondônia',
      'Roraima',
      'Santa Catarina',
      'São Paulo',
      'Sergipe',
      'Tocantins',
    ];
    return brazilStates.map((state) => (
      <option key={state.split(' ').join('')} value={state.toLowerCase}>
        {state}
      </option>
    ));
  }

  render() {
    return (
      <form>
        <fieldset>
          <label htmlFor='name'>
            Name:
            <input
              type='text'
              name='name'
              maxLength={40}
              onChange={this.upperCasefy}
              required
            ></input>
          </label>

          <label htmlFor='email'>
            Email:
            <input type='text' name='email' maxLength={50} required></input>
          </label>

          <label htmlFor='cpf'>
            CPF:
            <input
              type='text'
              name='cpf'
              maxLength={11}
              onChange={(e) => this.validateCPF(e, this.displayErrorMessage)}
              required
            ></input>
          </label>

          <label htmlFor='address'>
            Address:
            <input
              type='text'
              name='address'
              maxLength={200}
              onChange={(e) =>
                this.validateAddress(e, this.displayErrorMessage)
              }
              required
            ></input>
          </label>

          <label htmlFor='city'>
            City:
            <input
              type='text'
              name='city'
              maxLength={28}
              onBlur={(e) => this.validateCity(e, this.displayErrorMessage)}
              required
            ></input>
          </label>

          <label htmlFor='estado'>
            Estado:
            <select>
              <option selected value=''>
                Please choose an option
              </option>
              {this.brazilianStates()}
            </select>
          </label>

          <label htmlFor='tipo'>
            Tipo:
            <span>
              <input required type='radio' id='house' name='type'></input>
              <label for='house'>House</label>

              <input required type='radio' id='apt' name='type'></input>
              <label for='apt'>Apartment</label>
            </span>
          </label>
        </fieldset>

        <fieldset>
          <label>
            Resume:
            <textarea
              name='resume'
              maxLength={1000}
              rows={20}
              cols={50}
              placeholder='Write a summary of your CV (max. 1000 char.)'
              required
            ></textarea>
          </label>
          <label>
            Cargo:
            <textarea
              name='cargo'
              maxLength={40}
              rows={20}
              cols={20}
              placeholder='Write this information very carefully.'
              required
            ></textarea>
          </label>
          <label>
            Descrição do cargo:
            <input
              type='text'
              name='description'
              maxLength={500}
              required
            ></input>
          </label>
        </fieldset>

        <button>Click to see the consolidated information</button>
        <button>Click to erase all information from sceen</button>
      </form>
    );
  }
}

export default Forms;
