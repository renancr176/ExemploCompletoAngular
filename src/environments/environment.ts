// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  idSistema: 11,
  production: false
};


export class Environment 
{
  public production: boolean;
  public hostName: string;
  public hostType: string;

  constructor(){
    this.hostName = window.location.hostname;
    switch(this.hostName){
      case 'www.extensao.baraodemaua.br':
      case 'extensao.baraodemaua.br':
        this.hostType = 'production';
        this.production = true;
      break;
      case 'www.extensao.baraodemaua.net':
      case 'extensao.baraodemaua.net':
        this.hostType = 'homologation';
        this.production = false;
      break;
      case 'www.extensao.baraodemaua.teste':
      case 'extensao.baraodemaua.teste':
        this.hostType = 'test';
        this.production = false;
      break;
      default:
        this.hostType = 'localhost';
        this.production = false;
      break;
    }
  }
}