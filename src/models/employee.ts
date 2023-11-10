export class Employee {
    public id?: any;
    public name?: string;
    public description?: string;
    public iconUrl?: string;
    public sex?: string;
    public role?: string;
    public isactive?: string;
    public rank?: string;

    constructor(
        id?: any,
        name?: string,
        description?: string,
        iconUrl?: string,
        sex?: string,
        role?: string,
        isactive?: string,
        rank?: string
        ){
            this.id=id;
            this.name=name;
            this.description=description;
            this.iconUrl=iconUrl;
            this.sex=sex;
            this.role=role;
            this.isactive=isactive;
            this.rank=rank;
    }
}