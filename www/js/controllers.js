angular.module('starter.controllers', [])

.controller('ProdutoController', function ($scope) {
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
});