export class Telefono {
  private tipo: string;
  private numero: number;

  constructor($tipo: string, $numero: number) {
    this.tipo = $tipo;
    this.numero = $numero;
  }

  public get $tipo(): string {
    return this.tipo;
  }
  public set $tipo(value: string) {
    this.tipo = value;
  }

  public get $numero(): number {
    return this.numero;
  }
  public set $numero(value: number) {
    this.numero = value;
  }

  toString(): string {
    return ` ${this.tipo}: ${this.numero}`;
  }
}