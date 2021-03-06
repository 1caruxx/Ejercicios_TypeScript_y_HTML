var Test;
(function (Test) {
    var Ajax = /** @class */ (function () {
        function Ajax() {
            var _this = this;
            this.Get = function (ruta, success, params, error) {
                if (params === void 0) { params = ""; }
                var parametros = params.length > 0 ? params : "";
                ruta = params.length > 0 ? ruta + "?" + parametros : ruta;
                _this._xhr.open('GET', ruta);
                _this._xhr.send();
                _this._xhr.onreadystatechange = function () {
                    if (_this._xhr.readyState === Ajax.DONE) {
                        if (_this._xhr.status === Ajax.OK) {
                            success(_this._xhr.responseText);
                        }
                        else {
                            if (error !== undefined) {
                                error(_this._xhr.status);
                            }
                        }
                    }
                };
            };
            this.Post = function (ruta, success, params, error) {
                if (params === void 0) { params = ""; }
                var parametros = params.length > 0 ? params : "";
                _this._xhr.open('POST', ruta, true);
                _this._xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                _this._xhr.send(parametros);
                _this._xhr.onreadystatechange = function () {
                    if (_this._xhr.readyState === Ajax.DONE) {
                        if (_this._xhr.status === Ajax.OK) {
                            success(_this._xhr.responseText);
                        }
                        else {
                            if (error !== undefined) {
                                error(_this._xhr.status);
                            }
                        }
                    }
                };
            };
            this._xhr = new XMLHttpRequest();
            Ajax.DONE = 4;
            Ajax.OK = 200;
        }
        Ajax.prototype.GetXHR = function () {
            return this._xhr;
        };
        return Ajax;
    }());
    Test.Ajax = Ajax;
})(Test || (Test = {}));
/// <reference path="./ajax.ts"/>
var Test;
(function (Test) {
    var Impares = /** @class */ (function () {
        function Impares(numero) {
            this._numero = numero;
            this._ajax = new Test.Ajax();
            this._esNumero = this.ValidarNumero(this._numero);
        }
        Impares.prototype.CalcularImpares = function () {
            if (this._esNumero) {
                this._ajax.Get("./admin.php", this.Sucess, "txtValor=" + this._numero, this.Error);
            }
            else {
                return "Valor ingresado no valido.";
            }
        };
        Impares.prototype.Sucess = function () {
            //(<HTMLInputElement>document.getElementById("txtImpares")).value = (this._ajax.GetXHR()).responseText;
            //return (this._ajax.GetXHR()).responseText;
            return "llegue";
        };
        Impares.prototype.Error = function () {
            return "Ups... algo salio mal. Status: " + this._ajax.GetXHR().status + " ReadyState: " + (this._ajax.GetXHR()).readyState;
        };
        Impares.prototype.ValidarNumero = function (numero) {
            for (var i = 0; i < numero.length; i++) {
                if (isNaN(parseInt(numero.charAt(i)))) {
                    return false;
                }
            }
            return true;
        };
        return Impares;
    }());
    Test.Impares = Impares;
})(Test || (Test = {}));
