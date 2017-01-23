# App Cadastro de produtos em Ionic
Aplicativo de cadastro de produtos usando o Ionic 1.7

obs: O cadastro é fictício.

Depois da criação do aplicativo, para compilarmos para Android:

-- baixar o pacote jdk do java
-- baixar o sdk android

-- no Android sdk é necessário  instalar:

1) no extras: Google USB driver
2) Em Tools instalar o build tools correspondente da API que está usando: 
Exemplo: Se eu vou trabalhar com o Android 7.0 (API 24) instalar o build tools API 24.

-- pra compilar, no projeto Ionic, no prompt de comando (Antes precisamos digitar o comando):

cordova build --release android

-- Caso dê erro, se ele disser que não achou a pasta 'grandle', ou qualquer outra pasta precisamos configurar a pasta que ele precisa buscar o sdk. 

-- Explicação:

http://spring.io/guides/gs/android/

-- Você precisa configurar a pasta onde está o Android.

-- Digitar no prompt:

set ANDROID_HOME=C:\<installation location>\android-sdk-windows
set PATH=%PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools

-- Depois disso ele pode dar outro erro, um erro de licença. Exemplo:

"* What went wrong:
A problem occurred configuring root project 'android'.
> You have not accepted the license agreements of the following SDK components:
[Android SDK Platform 24]."

-- Caso aconteça, precisaremos instalar a licença:

-- Digitar:

mkdir "%ANDROID_HOME%\licenses

-- Depois: 

echo |set /p="8933bad161af4178b1185d1a37fbf41ea5269c55" > "%ANDROID_HOME%\licenses\android-sdk-license

-- Pronto! Agora podemos tentar compilar novamente:

cordova build --release android

obs: Você pode configurar o arquivo 'config.xml' com os dados do seu app: nome, seu e-mail, etc. Logo após a configuração, 'buildar' novamente:

cordova build --release android


