import { isDate } from "util";

export class Validations {
    
    cpf(cpf: string): boolean {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf == null) {
            return false;
        }
        if (cpf.length != 11) {
            return false;
        }
        if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
            return false;
        }
        let numero: number = 0;
        let caracter: string = '';
        let numeros: string = '0123456789';
        let j: number = 10;
        let somatorio: number = 0;
        let resto: number = 0;
        let digito1: number = 0;
        let digito2: number = 0;
        let cpfAux: string = '';
        cpfAux = cpf.substring(0, 9);
        for (let i: number = 0; i < 9; i++) {
            caracter = cpfAux.charAt(i);
            if (numeros.search(caracter) == -1) {
                return false;
            }
            numero = Number(caracter);
            somatorio = somatorio + (numero * j);
            j--;
        }
        resto = somatorio % 11;
        digito1 = 11 - resto;
        if (digito1 > 9) {
            digito1 = 0;
        }
        j = 11;
        somatorio = 0;
        cpfAux = cpfAux + digito1;
        for (let i: number = 0; i < 10; i++) {
            caracter = cpfAux.charAt(i);
            numero = Number(caracter);
            somatorio = somatorio + (numero * j);
            j--;
        }
        resto = somatorio % 11;
        digito2 = 11 - resto;
        if (digito2 > 9) {
            digito2 = 0;
        }
        cpfAux = cpfAux + digito2;
        if (cpf != cpfAux) {
            return false;
        }
        else {
            return true;
        }
    }

    email(email: string): boolean{
        let re: RegExp = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        return re.test(email);
    }

    data(data: string): boolean{
        let engFormat: RegExp = /[0-9][0-9][0-9][0-9]\-[0-9][0-9]\-[0-9][0-9]/;
        let brFormat: RegExp = /[0-9][0-9]\/[0-9][0-9]\/[0-9][0-9][0-9][0-9]/;
        if(data != null && data != '' && data.match(engFormat) || data.match(brFormat)){
           if(data.match(brFormat)){
                let dateStr: Array<string> = data.split('/');
                data = dateStr[2]+'-'+dateStr[1]+'-'+dateStr[0];
            }
            return isDate(data);
        }
        return false;
    }

    horario(horario: string): boolean{
        let horarioSmallFormat: RegExp = /[0-9][0-9]\:[0-9][0-9]/;
        let horarioFullFormat: RegExp = /[0-9][0-9]\:[0-9][0-9]\:[0-9][0-9]/;
        if(horario != null && horario != '' && horario.match(horarioSmallFormat) || horario.match(horarioFullFormat)){
            let horarioIntArray: Array<number> = Array<number>();
            for(let val of horario.split(':')){
                horarioIntArray.push(parseInt(val));
            }
            
            if(horario.match(horarioSmallFormat)
            && horarioIntArray[0] >= 0 && horarioIntArray[0] <= 23
            && horarioIntArray[1] >= 0 && horarioIntArray[1] <= 59
            ){
                return true;
            }else if(horario.match(horarioFullFormat)
            && horarioIntArray[0] >= 0 && horarioIntArray[0] <= 23
            && horarioIntArray[1] >= 0 && horarioIntArray[1] <= 59
            && horarioIntArray[2] >= 0 && horarioIntArray[2] <= 59
            ){
                return true;
            }
        }
        return false;
    }
}
