export interface FormProperties {
    routeLink: string;
    displayName: string;
    iconClass: string;
    buttons: ButtonItem[]
}

export interface ButtonItem {
    title: string;
    callback: Function;
}