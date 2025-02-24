import React from "react";
import Sidebar from "../../sidebar";
import Navbar from "../../components/ui/navbar";

const ProjectStructure = () => {
    return (
        <div className="text-black">
            {/* Sidebar */}
            <Navbar/>


            {/* Contenu principal */}
            <div className="flex">
                <Sidebar/>
                <div className="flex-1 p-8 overflow-y-auto">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold mb-4">BONUSAPI Project Structure</h1>
                        <p className="text-gray-700 mb-6">
                            Ce projet suit une structure spécifique pour organiser ses fichiers et répertoires. Voici un
                            aperçu
                            de la structure du projet RACINE :
                        </p>

                        {/* Bloc de code */}
                        <div className="bg-gray-100 p-6 rounded-lg overflow-x-auto">
        <pre className="text-sm font-mono text-gray-900">
          {`bonification
├── BonificationApiApplication.java
├── Config
│   ├── DotenvConfig.java
│   ├── MongoConfig.java
│   ├── SwaggerConfig.java
│   └── WebConfig.java
├── Controller
│   ├── AdminController.java
│   ├── AuthController.java
│   ├── ClientController.java
│   ├── HistoryController.java
│   ├── PointController.java
│   ├── RewardController.java
│   ├── RoleController.java
│   ├── RuleController.java
│   ├── TestController.java
│   ├── TransactionController.java
│   └── UserController.java
├── Entity
│   ├── Administrator.java
│   ├── BaseRule.java
│   ├── Client.java
│   ├── ERole.java
│   ├── History.java
│   ├── Point.java
│   ├── RefreshToken.java
│   ├── Reward.java
│   ├── Rewards.java
│   ├── Role.java
│   ├── Rule.java
│   ├── Statuts.java
│   ├── Transaction.java
│   └── User.java
├── Repository
│   ├── AdministratorRepository.java
│   ├── BaseRuleRepository.java
│   ├── ClientRepository.java
│   ├── HistoryRepository.java
│   ├── PointRepository.java
│   ├── RefreshTokenRepository.java
│   ├── RewardRepository.java
│   ├── RoleRepository.java
│   ├── RuleRepository.java
│   ├── TransactionRepository.java
│   └── UserRepository.java
├── Security
│   ├── Deserializer
│   │   └── GrantedAuthorityDeserializer.java
│   ├── Jwt
│   │   ├── AuthEntryPointJwt.java
│   │   ├── AuthTokenFilter.java
│   │   └── JwtUtils.java
│   ├── Service
│   │   ├── UserDetailsImpl.java
│   │   └── UserDetailsServiceImpl.java
│   ├── WebSecurityConfig.java
│   └── utils
│       └── SecurityUtils.java
├── Service
│   ├── AdminService.java
│   ├── BaseService.java
│   ├── ClientService.java
│   ├── EmailService.java
│   ├── HistoryService.java
│   ├── PointService.java
│   ├── RefreshTokenService.java
│   ├── RewardService.java
│   ├── RuleService.java
│   ├── TransactionControllerTest.java
│   ├── TransactionService.java
│   ├── UserService.java
│   └── utils
│       ├── Mapper.java
│       └── Utils.java
├── notes.md
└── payload
    ├── dto
    │   ├── PointDTO.java
    │   ├── RewardDTO.java
    │   ├── RuleDTO.java
    │   ├── TransactionDTO.java
    │   └── TransactionHistoryDTO.java
    ├── exception
    │   ├── AccessClientException.java
    │   ├── AccessHistoryException.java
    │   ├── AccessPointsException.java
    │   ├── AccessRewardException.java
    │   ├── AccessRulesException.java
    │   ├── AccessTransactionException.java
    │   ├── DuplicateException.java
    │   ├── EntityNotFound.java
    │   ├── TokenRefreshException.java
    │   └── UsernameNotFoundException.java
    ├── request
    │   ├── HistoryRequest.java
    │   ├── LoginRequest.java
    │   ├── LogoutRequest.java
    │   ├── RuleRequest.java
    │   ├── SignupRequest.java
    │   └── TokenRefreshRequest.java
    └── response
        ├── JwtResponse.java
        ├── MessageResponse.java
        ├── SavedTransactionResponse.java
        └── TokenRefreshResponse.java`}
        </pre>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectStructure;
