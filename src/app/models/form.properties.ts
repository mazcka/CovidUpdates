export interface FormProperties {
    formId: string;
    routeLink: string;
    displayName: string;
    iconClass: string;
    buttons: ButtonItem[]
}

export interface ButtonItem {
    title: string;
    callback: Function;
}