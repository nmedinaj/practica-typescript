import { Direccion } from './Direccion.js'
import { Mail } from './Mail.js'
import { Telefono } from './Telefono.js'

export class Persona {
    private nombre: string;
    private apellidos: string;
    private edad: number;
    private dni: string;
    private cumpleaños: Date;
    private color_favorito: string;
    private sexo: string;
    private direcciones: Array<Direccion>;
    private mails: Array<Mail>;
    private telefonos: Array<Telefono>;
    private notas: string;

    constructor($nombre: string, $apellidos: string, $edad: number, $dni: string, $cumpleaños: Date, $color_favorito: string, $sexo: string, $direcciones: Array<Direccion>, $mails: Array<Mail>, $telefonos: Array<Telefono>, $notas: string) {
        this.nombre = $nombre;
        this.apellidos = $apellidos;
        this.edad = $edad;
        this.dni = $dni;
        this.cumpleaños = $cumpleaños;
        this.color_favorito = $color_favorito;
        this.sexo = $sexo;
        this.direcciones = $direcciones;
        this.mails = $mails;
        this.telefonos = $telefonos;
        this.notas = $notas;
    }

    public get $nombre(): string {
        return this.nombre;
    }
    public set $nombre(value: string) {
        this.nombre = value;
    }

    public get $apellidos(): string {
        return this.apellidos;
    }
    public set $apellidos(value: string) {
        this.apellidos = value;
    }

    public get $edad(): number {
        return this.edad;
    }
    public set $edad(value: number) {
        this.edad = value;
    }

    public get $dni(): string {
        return this.dni;
    }
    public set $dni(value: string) {
        this.dni = value;
    }

    public get $cumpleaños(): Date {
        return this.cumpleaños;
    }
    public set $cumpleaños(value: Date) {
        this.cumpleaños = value;
    }

    public get $color_favorito(): string {
        return this.color_favorito;
    }
    public set $color_favorito(value: string) {
        this.color_favorito = value;
    }

    public get $sexo(): string {
        return this.sexo;
    }
    public set $sexo(value: string) {
        this.sexo = value;
    }

    public get $direcciones(): Array<Direccion> {
        return this.direcciones;
    }
    public set $direcciones(value: Array<Direccion>) {
        this.direcciones = value;
    }

    public get $mails(): Array<Mail> {
        return this.mails;
    }
    public set $mails(value: Array<Mail>) {
        this.mails = value;
    }

    public get $telefonos(): Array<Telefono> {
        return this.telefonos;
    }
    public set $telefonos(value: Array<Telefono>) {
        this.telefonos = value;
    }

    public get $notas(): string {
        return this.notas;
    }
    public set $notas(value: string) {
        this.notas = value;
    }

    Imprimir(): void {
        console.log(`${this.nombre} ${this.apellidos} con ${this.edad} años de edad y dni: ${this.dni}, nació el ${this.cumpleaños} y su color favorito es el ${this.color_favorito}. Su género es ${this.sexo} y sus datos de contacto son:
            Direcciones ${this.direcciones.toString()},
            Mails ${this.mails.toString()},
            Teléfonos ${this.telefonos.toString()}.
            Notas: ${this.notas}`);
    }
}