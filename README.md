# Galeria de Imagens Ionic
Galeria de imagens com upload no servidor, desenvolvida com Ionic/Capacitor e Express/NodeJS.

## Configurando o Ambiente:
Para testar esse projeto é necessario ter instalado as seguintes aplicações:
* NodeJS [(saiba como instalar)](https://nodejs.org/en/download/)
* Angular CLI [(saiba como instalar)](https://angular.io/cli)
* Ionic CLI [(saiba como instalar)](https://ionicframework.com/docs/installation/cli)
* Capacitor [(saiba como instalar)](https://capacitor.ionicframework.com/docs/getting-started)

## Testando o APP

1. Faça o download ou clone do projeto:
```
$ git clone https://github.com/Danie1Net0/GaleriaDeImagensIonic.git
```

### Iniciando o Servidor

2.1. Entre no diretório ***server***:
```
$ cd server
```

2.2. Instale as dependências do servidor:
```
$ npm install
```

2.3. Inicie o servidor:
```
$ npm start
```

### Iniciando o Aplicativo

3.1. Certifique-se de que está no diretório raiz e instale as dependências do aplicativo:
```
$ npm install
```

3.2. Inicie o servidor:
```
$ ionic serve
```

> Os uploads de imagens serão feitos no diretório ***server/uploads*** 

## Gerando APK para Android
Para seguir os próximos passos, as instruções anteriores devem ser executadas previamente. Feito isso, siga em frente:

1. Gere o build do projeto:
```
$ ionic build
```

2. Adicione a dependência do Android ao Capacitor:
```
$ capacitor add android
```

3. Adicione o build à dependência do Android:
```
$ capacitor copy
$ capacitor sync
```

4. Abra o projeto no Android Studio:
```
$ capacitor open android
```

> Se você estiver usando Linux, edite o arquivo **capacitor.config.json** adicionando o caminho de instalação do Android Studio na sua máquina:
```
"linuxAndroidStudioPath": "/opt/android-studio/bin/studio.sh"
```

> Com o Android Studio aberto, será possível gerar o APK e testar o aplicativo no emulador ou num dispositivo físico, da mesma forma como é feito com aplicativos desenvolvidos direto na IDE.
