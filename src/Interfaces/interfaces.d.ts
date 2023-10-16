// --------------------------------
export interface Todo {
    id:string
    text:string
    completed: boolean
}
export interface TodoState {
    todos: Todo[]
}
export interface RootState {
    todos: TodoState
}
// --------------------------------



// --------------------------------
export interface PropsUseFade {
    onClose: () => void;
    isVisible: boolean;
    isClosing: boolean;
}
export interface useFadeType extends PropsUseFade  {
    isOpen: () => void;
};
// --------------------------------
