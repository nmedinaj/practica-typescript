export class Direccion {
	private calle: string;
	private numero: number;
	private piso: number;
	private letra: string;
	private cod_postal: number;
	private poblacion: string;
	private provincia: string;

	constructor($calle: string, $numero: number, $piso: number, $letra: string, $cod_postal: number, $poblacion: string, $provincia: string) {
		this.calle = $calle;
		this.numero = $numero;
		this.piso = $piso;
		this.letra = $letra;
		this.cod_postal = $cod_postal;
		this.poblacion = $poblacion;
		this.provincia = $provincia;
	}

	public get $calle(): string {
		return this.calle;
	}
	public set $calle(value: string) {
		this.calle = value;
	}

	public get $numero(): number {
		return this.numero;
	}
	public set $numero(value: number) {
		this.numero = value;
	}

	public get $piso(): number {
		return this.piso;
	}
	public set $piso(value: number) {
		this.piso = value;
	}

	public get $letra(): string {
		return this.letra;
	}
	public set $letra(value: string) {
		this.letra = value;
	}

	public get $cod_postal(): number {
		return this.cod_postal;
	}
	public set $cod_postal(value: number) {
		this.cod_postal = value;
	}

	public get $poblacion(): string {
		return this.poblacion;
	}
	public set $poblacion(value: string) {
		this.poblacion = value;
	}

	public get $provincia(): string {
		return this.provincia;
	}
	public set $provincia(value: string) {
		this.provincia = value;
	}

	toString(): string {
		return ` ${this.calle}, ${this.numero}, ${this.piso}, ${this.letra}, ${this.cod_postal}, ${this.poblacion}, ${this.provincia}`;
	  }
}