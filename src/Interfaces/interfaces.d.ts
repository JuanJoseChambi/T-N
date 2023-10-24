
// --------------------------------
export interface Children {
    children: JSX.Element[] | JSX.Element | string
    // children: (string | JSX.Element)
}
// --------------------------------

// --------------------------------
export interface Todo {
    id:string
    title: string
    text:string
    completed: boolean
    date?: null | Date
}
export interface TodoState {
    todos: Todo[]
    todosBackup: Todo[] 
}
export interface RootState {
    todos: TodoState
}
// --------------------------------

// --------------------------------
export interface PropsUseFade  {
    isOpen: () => void;
    onClose: () => void;
    isVisible: boolean;
    isClosing: boolean;
}
export interface modalProps extends Omit<PropsUseFade, 'isOpen'>  {
    children: (null | JSX.Element)[] 
    styles?: string;
};
// --------------------------------


// --------------------------------
export interface btnsProps {
    onClick: () => void
    children: JSX.Element[] | JSX.Element | string | string[]

}
// --------------------------------

// --------------------------------
export interface TooltipProp extends Children {
    text: string
}
// --------------------------------

// --------------------------------
export interface OptionsAcordeonProps extends Children {
    icon: string
}
// --------------------------------
