export class Mail {
  private tipo: string;
  private direccion: string;

  constructor($tipo: string, $direccion: string) {
    this.tipo = $tipo;
    this.direccion = $direccion;
  }

  public get $tipo(): string {
    return this.tipo;
  }
  public set $tipo(value: string) {
    this.tipo = value;
  }

  public get $direccion(): string {
    return this.direccion;
  }
  public set $direccion(value: string) {
    this.direccion = value;
  }

  toString(): string {
    return ` Correo ${this.tipo}: ${this.direccion}`;
  }
}