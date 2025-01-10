export interface Utente {
  id: number;
  nome: string;
  cognome: string;
  email: string;
  ruolo: number; // Administrator: 3, Utente: 2

  // Relazioni opzionali
  metodiPagamento?: MetodoPagamento[];
  indirizziSpedizione?: IndirizzoSpedizione[];
  vendite?: Vendita[];
}

export interface MetodoPagamento {
  id: number;
  tipo: string; // Es: "Carta di Credito", "PayPal"
  dettagli: string; // Es: "**** **** **** 1234"
}

export interface IndirizzoSpedizione {
  id: number;
  via: string;
  citta: string;
  cap: string;
  provincia: string;
  nazione: string;
}

export interface Vendita {
  id: number;
  data: Date;
  totale: number;
}
