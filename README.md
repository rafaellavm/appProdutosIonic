# App Cadastro de produtos em Ionic
Aplicativo de cadastro de produtos usando o Ionic 1.7

obs: O cadastro é fictício.

Depois da criação do aplicativo, para compilarmos para Android:
1) Baixar o pacote jdk do java
2)Baixar o sdk android

No Android sdk é necessário  instalar:
1) no extras: Google USB driver
2) Em Tools instalar o build tools correspondente da API que está usando: 

Exemplo: Se eu vou trabalhar com o Android 7.0 (API 24) instalar o build tools API 24.

pra compilar, no projeto Ionic, no prompt de comando (Antes precisamos digitar o comando):

```bash
cordova build --release android
```
# Caso ocorra erro na compilação:

Caso dê erro, se ele disser que não achou a pasta 'grandle', ou qualquer outra pasta precisamos configurar a pasta que ele precisa buscar o sdk. 

Abaixo um tutorial explicando como fazer:

http://spring.io/guides/gs/android/

Caso isso ocorra, será necessário configurar a pasta onde está o Android.

```bash
set ANDROID_HOME=C:\<installation location>\android-sdk-windows
set PATH=%PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools
```
# Caso ocorra erro de licença:

```bash
* What went wrong:
A problem occurred configuring root project 'android'.
> You have not accepted the license agreements of the following SDK components:
[Android SDK Platform 24].
```
Será necessário instalar a licença:

No prompt de comando: 

```bash
mkdir "%ANDROID_HOME%\licenses
```

-- Depois: 

echo |set /p="8933bad161af4178b1185d1a37fbf41ea5269c55" > "%ANDROID_HOME%\licenses\android-sdk-license

-- Pronto! Agora podemos tentar compilar novamente:

cordova build --release android

obs: Você pode configurar o arquivo 'config.xml' com os dados do seu app: nome, seu e-mail, etc. Logo após a configuração, 'buildar' novamente:

cordova build --release android


