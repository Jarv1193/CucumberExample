Necesidad del negocio: The Internet Guinea Pig Website

  Esquema del escenario: Como un usuario, yo puedo autenticarme correctamente en un area segura

    Dado Que yo estoy en la Pagina de login
    Cuando Yo me autentico con mi usuario <username> y contraseña <password>
    Entonces Yo deberia ver un mensaje diciendo <message>

    Ejemplos:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
