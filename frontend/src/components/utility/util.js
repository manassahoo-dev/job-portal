function toSentenceCase  (value)  {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
}

export default toSentenceCase;