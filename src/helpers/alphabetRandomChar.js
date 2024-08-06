function alphabetRandomChar()
{
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','q','w','x','v','y','z']
    return alphabet[Math.floor(Math.random()*alphabet.length)]
}

export default alphabetRandomChar