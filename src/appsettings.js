(function (window) {
    window.__env = window.__env || {};
  
    // API url
    window.__env.apiUrl = 'https://dev.your-api.com';
    window.__env.Config= {
        storageAccount:'name of storage account',  //Paste here your storage acccount name
        containerName:'name of blob container',  //Paste here your container name
        sas:'e.g ==> ?sv=2018-03-28&ss=bfqt&srt=sco&=rwdlacup&se=-09-30T18:53:59Z&=2019--31T10:53:59Z&spr=https,http&sig=dG0ZlbqgD0ZIuZbY%2FDNF2w7nf7CSCuLNreCUnKxAkK0%3D'
        // To generate sas go to azure estorage account choose "Shared Access Signature" from the option in right hand side menu
        // then give "start and end date" in which the token to give access to token to fetch data from  BLOB
        // then click on "Generate SAS and connection string" and copy string from SAS token and paste above in sas
        // Note : Don't forget to give start and end date otherwise token wont work.
      }
    
    // Whether or not to enable debug mode
    // Setting this to false will disable console output
    window.__env.enableDebug = false;
  }(this));