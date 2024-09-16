type helloProps = {
    firstname: string;
    lastname?: string;
    age?: number;
};

declare function hello({ firstname, lastname, age }: helloProps): void;

export { hello, type helloProps };
