export const verifyToken = async (isAuthenticated: boolean) => {

    const token = localStorage.getItem('access_token');

    if (token) {
        try {
            const response = await fetch('http://localhost:8000/users/get/me/', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                isAuthenticated = true;
                
            }
            else {
                localStorage.removeItem('access_token');
                isAuthenticated = false;
            }
        } catch (error) {
            // Se a verificação falhar (por exemplo, token inválido), você pode lidar com isso aqui
            console.error('Erro na verificação do token:', error);
        }
    }
  }

  export const verifyTokenPromise = (isAuthenticated: boolean) => {
    // Exemplo de utilização
    /* verifyToken(isAuthenticated)
    .then(() => {
        Código para quando a verificação for bem-sucedida
    })
    .catch((error) => {
        Código para quando ocorrer um erro na verificação
    }); */

    const token = localStorage.getItem('access_token');
  
    if (token) {
      return fetch('http://localhost:8000/users/get/me/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            isAuthenticated = true;
          } else {
            localStorage.removeItem('access_token');
            isAuthenticated = false;
          }
        })
        .catch((error) => {
          // Se a verificação falhar (por exemplo, token inválido), você pode lidar com isso aqui
          console.error('Erro na verificação do token:', error);
        });
    } else {
      return Promise.resolve(); // Sem token para verificar
    }
  };
  
