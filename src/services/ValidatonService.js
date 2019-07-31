class ValidationService {
    validateVideoUrl = (url) => {
        if (!url) return null;

        return url.includes('watch?v=') ? url.replace('watch?v=', 'embed/') : url;
    }
}

export const validationService = new ValidationService();