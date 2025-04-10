<br>

<p align="center">
    <img src="assets/images/TimeCapsuleX-logo.png" alt="TimeCapsuleX" border="0" style="width:30%; height:auto;">
</p>

<br>

[Introduction](#introduction) <br>
[Goals and motivations](#goals-and-motivations) <br>
[Roadmap](#roadmap) <br>
[Backend](#backend) <br>
[Contact](#contact) <br>

 <br>

# Introduction

TimeCapsuleX is a modern solution for securely storing and sharing memories, messages and important digital files. Designed with blockchain technology, it guarantees authenticity, privacy and secure storage for your data.
### Application parts and technologies used:

| Application | Technologies                                                                                                                                                                                                                             |
| --- |------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Backend | ![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white) ![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white)                                   |
| Frontend | ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) |
| Blockchain | ![Solana](https://img.shields.io/badge/Solana-000?style=for-the-badge&logo=Solana&logoColor=9945FF) ![Rust](https://img.shields.io/badge/rust-%23E34F26.svg?style=for-the-badge&logo=rust&logoColor=white)                               |

<br>
<br>

# Goals and motivations

TimeCapsuleX is designed to revolutionize the way digital memories, messages, and important files are preserved and shared over time. The goal is to provide a secure, private, and verifiable method for storing valuable information, ensuring its integrity and accessibility only to intended recipients.

By utilizing blockchain technology, TimeCapsuleX guarantees data authenticity, prevents unauthorized modifications, and empowers users with full control over their digital legacies. Whether it is a heartfelt message for future generations, a time-locked contract, or a digital will, the platform ensures that significant information remains protected and is delivered at the appropriate moment.

<br>
<br>

# Roadmap

### The Priority Levels:

| Priority | Description
| --- | --- |
| ![Static Badge](https://img.shields.io/badge/High-f94144) | These tasks are the necessary foundation of the application's operation. They are indispensable elements that ensure the proper functioning of the application's business logic. Their implementation is necessary to achieve the main functionality of the system |
| ![Static Badge](https://img.shields.io/badge/Low-25a244) | Low-priority tasks are not essential to the application and do not directly affect its core business logic. They typically involve minor improvements, cosmetic UI changes, or other optional features |

<br>

### Action steps:

|     | Task                                                                               | Priority
|-----|------------------------------------------------------------------------------------| --- |
| 1.  | Create a detailed description of use cases                                         | ![Static Badge](https://img.shields.io/badge/High-f94144) |
| 2.  | Design of static application views                                                 | ![Static Badge](https://img.shields.io/badge/High-f94144) |
| 3.  | Implementation of a basic frontend part of appliaction using static views          | ![Static Badge](https://img.shields.io/badge/High-f94144) |
| 4.  | Deployment of the business part of the application in the prepared front-end version | ![Static Badge](https://img.shields.io/badge/High-f94144) |
| 5.  | Develop Angular views and applications with more capsule types                     | ![Static Badge](https://img.shields.io/badge/High-f94144) |
| 6.  | Addition of more capsule types to the backend                                      | ![Static Badge](https://img.shields.io/badge/High-f94144) |
| 7.  | Determine API interfaces for the backend and communication with the blockchain     | ![Static Badge](https://img.shields.io/badge/High-f94144) |
| 7.  | Create smart contracts using Rust language within the Solana and Anchor framework  | ![Static Badge](https://img.shields.io/badge/High-f94144) |
| 9.  | UI/UX improvements              | ![Static Badge](https://img.shields.io/badge/Low-25a244) |
| 10. | End-to-end testing                                              | ![Static Badge](https://img.shields.io/badge/Low-25a244) |
| 11. | Prepare a schedule for work on subsequent phases of the project                    | ![Static Badge](https://img.shields.io/badge/Low-25a244) |

<br>
<br>

# Backend

### Architecture
The business part of the application was designed based on the Modular Monolith architecture pattern with a mix of Vertical Slice Architecture and Clean Architecture.
- Each module is sliced vertically ensuring that the logic of each process is separated and organized in a separate location
- The structure of the modules is divided according to the Clean Architecture ensuring an appropriate division of responsibilities and relationships
- Communication between modules is through IntegrationsEvents using EventBus
- The core of the entire application is IntegrationCapsule, which is responsible for the processes of publishing and reading capsules

<br>

<p align="center">
    <img src="assets/images/subdomains.png" alt="Subdomains" border="0" style="width:80%; height:auto;">
</p>

<br>

### TimeBased Capsules

- Basic capsule model that can be opened after a period of time
- It can only be opened by the person specified when it was created
- Once the capsule has been opened, it can also be shared publicly with others
- In the basic version only text messages, later also the possibility of file storage

Sample processes for this capsule type:
<br>

<p align="center">
    <img src="assets/images/time-based-capsule-processess.png" alt="Subdomains" border="0" style="width:80%; height:auto;">
</p>

<br>

<br>
<br>

# Contact

Created by [@Cwirek95](https://github.com/Cwirek95) - feel free to contact me! <br>

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/andrzej-cwiertniak/)

[![Gmail Badge](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white&link=mailto:acwiertniak95@gmail.com)](mailto:acwiertniak95@gmail.com)