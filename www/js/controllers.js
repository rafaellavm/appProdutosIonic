angular.module('starter.controllers', [])

  .controller('ProdutoController', function ($scope, $ionicModal, $ionicPopup) {

    $scope.produtos = [{
        titulo: 'Livro de Ionic',
        valor: 50.99,
        publicar: true
      },
      {
        titulo: 'Livro de Nodejs',
        valor: 75.00,
        publicar: true
      },
      {
        titulo: 'Livro de CSS3',
        valor: 100,
        publicar: true
      },
      {
        titulo: 'Aprenda html em 5 dias',
        valor: 30,
        publicar: true
      },
      {
        titulo: 'Conhecendo o javascript na prática',
        valor: 69.99,
        publicar: false
      },

    ];

    $ionicModal.fromTemplateUrl('templates/adicionar.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.abreAdicionar = function () {
      $scope.editando = false;
      $scope.produto.titulo = "";
      $scope.produto.valor = "";
      $scope.produto.publicar = false;
      $scope.modal.show();
    }

    $scope.addProduto = function (produto) {
      if (!validacao(produto)) {
        return;
      }

      $scope.produtos.push({
        titulo: produto.titulo,
        valor: produto.valor,
        publicar: produto.publicar
      });

      produto.titulo = "";
      produto.valor = "";
      produto.publicar = false;
      $scope.modal.hide();
    }

    $scope.produto = {
      titulo: "",
      valor: "",
      publicar: false
    };
    $scope.editando = false;
    var auxProdutoEditar;

    $scope.editarProduto = function (produtoEditar) {
      $scope.editando = true;
      $scope.produto.titulo = produtoEditar.titulo;
      $scope.produto.valor = produtoEditar.valor;
      $scope.produto.publicar = produtoEditar.publicar;
      auxProdutoEditar = produtoEditar;
      $scope.modal.show();
    };

    $scope.salvarProduto = function (produto) {
      if (!validacao(produto)) {
        return;
      }
      auxProdutoEditar.titulo = produto.titulo;
      auxProdutoEditar.valor = produto.valor;
      auxProdutoEditar.publicar = produto.publicar;
      $scope.modal.hide();
    };

    $scope.deletarProduto = function (produto) {
      for (var index in $scope.produtos) {
        var aux = $scope.produtos[index];
        if (produto === aux) {
          $scope.produtos.splice(index, 1);
        }
      }
    };

    $scope.deletando = false;

    var validacao = function (produto) {
      var textoErro = "";
      var existeErro = false;

      if (produto.titulo === "") {
        existeErro = true;
        textoErro += "<p>Preencha um título válido</p>";
      }
      if (produto.valor === "") {
        existeErro = true;
        textoErro += "<p>Preencha um valor válido</p>";
      }

      if (existeErro) {
        var alertPopup = $ionicPopup.alert({
          title: "Erro no formulário",
          template: textoErro
        });
        return false;
      } else {
        return true;
      }

    };

  });
