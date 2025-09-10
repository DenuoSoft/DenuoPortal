export const formatDate = (dateString) => {
    if (!dateString) return '';
    
    const parts = dateString.split('-');
    if (parts.length === 3 && parts[0].length === 4) {
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    
    return dateString; 
};