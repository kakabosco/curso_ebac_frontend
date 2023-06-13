$(document).ready(function () {
    $("#telefone").mask("(00) 00000-0000", {
        placeholder: "(__) _____-____",
    });
    $("#cpf").mask("000.000.000-00", {
        placeholder: "___.___.___-__",
    });
    $("#cep").mask("00000-000", {
        placeholder: "_____-___",
    });

    $.validator.addMethod("fullname", function (value, element) {
        return this.optional(element) || /\w+\s+\w+/.test(value);
    });

    $("form").validate({
        errorClass: "error",
        rules: {
            nome: {
                required: true,
                fullname: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
            },
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome completo.",
                fullname: "Por favor, insira seu nome e sobrenome",
            },
            email: {
                required: "Por favor, insira um endereço de e-mail.",
                email: "Por favor, insira um endereço de e-mail válido.",
            },
            telefone:
                "Por favor, insira seu número de telefone no formato (XX) XXXXX-XXXX.",
            cpf: "Por favor, insira seu CPF no formato XXX.XXX.XXX-XX.",
            endereco: "Por favor, insira seu endereço completo.",
            cep: "Por favor, insira seu CEP no formato XXXXX-XXX.",
        },
        submitHandler: function () {
            $("#message-error").hide();
            $("#message-success").show();
            $("form")[0].reset();
        },
        invalidHandler: function () {
            $("#message-success").hide();
            $("#message-error").show();
        },
    });
});
