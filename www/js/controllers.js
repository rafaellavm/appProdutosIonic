angular.module('starter.controllers', [])

.controller('ProdutoController', function ($scope, $ionicModal) {

    $scope.produtos = [
        {
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
            publicar: true
        },

  ];

    $ionicModal.fromTemplateUrl('templates/adicionar.html', {
        scope: $scope
    }).then(function(modal){
        $scope.modal = modal;
    });

    $scope.addProduto = function(produto){

        $scope.produtos.push({

            titulo: produto.titulo,
            valor: produto.valor,
            publicar: produto.publicar
        });

        produto.titulo = '';
        produto.valor = '';
        produto.publicar = false;

        $scope.modal.hide();
    }
});
