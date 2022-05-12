**RF** => Requisitos funcionais

**RNF** => Requisitos não funcionais

**RN** => Regra de negócio

# Cadastro de carro

**RF**
    * It should be possible to register a new car
**RNF**

**RN** 
    * Not should be possible to register a car with a plate already exist.
    * Not should be possible update a plate of a car already exist.
    * The car should be register, by default, with availability.
    * The user responsible for the register, must be a user administrator

# Listagem de carros

**RF**
    * It Should be possible list all cars available
    * It should be possible list all cars available by the name of category
    * It should be possible list all cars available by the name of brand
    * It should be possible list all cars available by the name of car

**RN** 
    * The user not need be Logged on the system

# Cadastro de Especificação no carro
**RF**
    * It Should be possible register a new specification for a car
    * It Should be possible list all specifications
    * It Should be possible list all cars

**RN** 
    * Not should be possible register a specification for a car not register
    * Not should be possible register a specification already exist for by one same car 
    * The user responsible for the register, must be a user administrator

# Cadastro de Imagem do carro

**RF**
    * It should be possible to register the image of the car
    * It Should be possible list all cars

**RNF**
    *Use multer for upload files

**RN** 
    * The user should be can register more than one image for the same car
    * The user responsible for the register, must be a user administrator

# Alguel de carros
**RF**
    * Should be possible register a rental

**RN** 
    * The rental must have a minimum duration of 24 hour
    * Not should be possible register a new rental case already exist rental open for the same user
    * Not should be possible register a new rental case already exist rental open for the same car