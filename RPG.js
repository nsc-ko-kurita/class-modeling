class RPG {
    constructor(name, HP, MP, buki, kougeki){
        this.name = name;
        this.HP = HP;
        this.MP = MP;
        this.buki = buki;
        this.kougeki = kougeki;
    }
     
}

let Yuusya = new RPG(
    '勇者',
    '100',
    '200',
    'ナイフ',
    '素手'
);

let Wizard = new RPG(
    '魔法使い',
    '80',
    '20',
    'ナイフ',
    ''
);

let Cleric = new RPG(
    'ヒーラー',
    '90',
    '20',
    'ナイフ',
    ''
);

let Berseker = new RPG(
    'バーサーカ',
    '60',
    '８',
    '',
    '素手'
);




let slime = new RPG(
    'スライム',
    '60',
    '８',
    'エアガン',
    '素手'
);

let Ork = new RPG(
    'オーク',
    '60',
    '８',
    'エアガン',
    '素手'
);

let LastBoss = new RPG(
    'バーサーカ',
    '60',
    '８',
    'エアガン',
    '素手'
);