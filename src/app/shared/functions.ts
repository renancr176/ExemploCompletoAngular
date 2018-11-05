export class Functions {
    removeMaskNumber(val: string): string{
        return val.replace(/[^\d]+/g, '');
    }

    maskPhone(val: string): string{
        val = this.removeMaskNumber(val);
        if(val.length == 11){
            val = '('+val.substring(0,2)+') '+val.substring(2,7)+'-'+val.substring(7,11);
        }else if(val.length == 10){
            val = '('+val.substring(0,2)+') '+val.substring(2,6)+'-'+val.substring(6,10);
        }else if(val.length == 9){
            val = val.substring(0,5)+'-'+val.substring(5,9);
        }else if(val.length == 8){
            val = val.substring(0,4)+'-'+val.substring(4,8);
        }
        return val;
    }

    maskCpf(val: string): string{
        val = this.removeMaskNumber(val);
        if(val.length == 11){
            val = val.substring(0,3)+'.'+val.substring(3,3)+'.'+val.substring(6,3)+'-'+val.substring(9,2);
        }
        return val;
    }
}
