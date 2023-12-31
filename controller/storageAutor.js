var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
import { IsDefined } from 'class-validator';
export class Autor {
    constructor(data) {
        Object.assign(this, data);
        this.cc = 0;
        this.nombre = "Faker";
        this.edad = 0;
    }
}
__decorate([
    Expose({ name: 'cedula_usuario' }),
    IsDefined({ message: () => { throw { status: 422, message: `La cedula_usuario es obligatoria` }; } }),
    __metadata("design:type", Number)
], Autor.prototype, "cc", void 0);
__decorate([
    Expose({ name: 'nombre_usuario' }),
    IsDefined({ message: () => { throw { status: 422, message: `El nombre_usuario es obligatoria` }; } }),
    __metadata("design:type", String)
], Autor.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'apellido_usuario' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        "Faker"; }),
    __metadata("design:type", String)
], Autor.prototype, "apellido", void 0);
__decorate([
    Expose({ name: 'edad_usuario' }),
    IsDefined({ message: () => { throw { status: 422, message: `La edad_usuario es obligatoria` }; } }),
    __metadata("design:type", Number)
], Autor.prototype, "edad", void 0);
