# For Python Language
## Specific tools for linting, testing, and building
- Linting
  - Pylint
  - Flake8
  - Black
- Testing
   - pytest
   - unittest
   - tox
   - Coverage.py
- Building/Packaging:
  - pip
  - setuptools
  - poetry
  - build
  - twine
## CI Platform alternatives
- GitLab CI/CD
- CircleCI
- Azure DevOps
- Bitbucket Pipelines
- Travis CI
- TeamCity
- Bamboo
- DroneCI
- GoCD
## Self-hosted vs Cloud-based decision factors:
The choice between self-hosted and cloud-based CI depends heavily on the context of the project. Self-hosted solutions offer complete control and can be more cost-effective for high-volume operations, but require significant in-house expertise and ongoing maintenance. They are ideal for organizations with strict security requirements or specialized build environments. Cloud-based solutions is potentially more expensive at scale, but can provide immediate setup, automatic updates, and built-in redundancy without infrastructure overhead. Many organizations opt for a hybrid approach, using cloud CI for general development while maintaining self-hosted runners for sensitive or specialized workloads. The key is aligning the choice with the team's capabilities, security requirements, and resource constraints.

Key information needed:
- Team size and geographical distribution
- Security requirements and compliance needs
- Budget constraints
- Infrastructure expertise available
- Expected load and concurrency needs
- Network bandwidth requirements
- Custom hardware/software requirements


Cloud-based better when:

- Small to medium teams
- Limited DevOps resources
- Need quick setup
- Flexible scaling requirements
- Standard build environments suffice
- Budget available for subscription costs


Self-hosted better when:
- Strict security/compliance requirements
- Need custom build environments
- High volume of builds (cost-effective long-term)
- Special hardware requirements
- Already have infrastructure expertise
- Need complete control over the environment