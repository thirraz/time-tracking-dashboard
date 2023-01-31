export interface DataFetched {
  data: DataJSON;
}

export interface DataJSON {
  title: string;
  timeframes: Timeframes;
}

export interface Timeframes {
  daily: Daily;
  weekly: Weekly;
  monthly: Monthly;
}

export interface Daily {
  current: number;
  previous: number;
}

export interface Weekly {
  current: number;
  previous: number;
}

export interface Monthly {
  current: number;
  previous: number;
}
