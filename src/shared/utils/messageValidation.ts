
export const messageValidation = (value: unknown): boolean => {
    if(!value && typeof value !== 'string'){
        return false;
    }
    return true;
}
