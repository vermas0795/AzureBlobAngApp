export class EnvService {

  // The values that are defined here are the default values that can
  // be overridden by env.js

  // API url
  public apiUrl = '';
  public Config= {
    storageAccount:'',  //Paste here your storage acccount name
    containerName:'',  //Paste here your container name
    sas:''
    // To generate sas go to azur estorage account choose "Shared Access Signature" from the option in right hand side menu
    // then give "start and end date" in which the token to give access to token to fetch data from  BLOB
    // then click on "Generate SAS and connection string" and copy SAS token and paste here
    // Note : Don't forget to give start and end date otherwise token wont work.
  }
  // Whether or not to enable debug mode
  public enableDebug = true;
  constructor() {
  }

}
