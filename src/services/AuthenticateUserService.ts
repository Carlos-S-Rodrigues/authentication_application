import axios from "axios";


/*
  receber código (string)
  recuperar access_token do github
  verificar se o usuário existe no DB
  sim => gerar token
  não => Criar usuário no db e gerar token

  retornar token com informações do user
*/


interface IAccessTokenResponse{
  access_token: string
}

class AuthenticateUserService{
  async execute(code: string){
    const url = "https://github.com./login/oauth/access_token";

    const { data: accessTokenResponse } = await axios.post<IAccessTokenResponse>(url, null,{
      params:{
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers:{
        Accept: "application/json",
      },
    });

    const response = await axios.get("https://api.github.com/user",{

      headers:{
        authorization: `Bearer ${accessTokenResponse.access_token}`,
      },

    }); 



    return response.data
  
    
  }

}

export{AuthenticateUserService}