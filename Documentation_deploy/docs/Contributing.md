# Contributing to SHARC

---

Thank you for considering contributing to SHARC! Every contribution is valuable, and we are grateful for your support. Whether you’re fixing a bug, implementing a new feature, or improving the documentation, your effort helps make SHARC better for everyone. Below are the ways you can contribute.

## Types of Contributions

### Report Bugs
Found a bug? We would love to know about it! You can report bugs at [SHARC Issues](https://github.com/Radio-Spectrum/SHARC/issues).

When reporting a bug, please include:
- Your operating system name and version.
- Any relevant details about your setup (e.g., Python version, dependencies).
- A detailed description of the steps to reproduce the bug.

### Fix Bugs
Look through the GitHub issues for bug reports. If you see a bug tagged with "bug" and "help wanted," feel free to take it up. We encourage contributions to fix bugs and improve the stability of SHARC.

### Implement Features
Browse through the issues tagged with "enhancement" and "help wanted" if you want to add a new feature. Whether it's a new propagation model or a fresh antenna model, your feature will be a great addition!

### Write Documentation
SHARC could always use more documentation. Whether it's improving the official docs, updating docstrings, or writing articles and blog posts, your contribution to documentation helps others understand and use SHARC better.

When you implement a new feature (e.g., a new model), please add corresponding documentation in the Wiki or relevant sections of the project.

### Submit Feedback
We appreciate all feedback! You can submit your suggestions or feature requests via [SHARC Issues](https://github.com/Radio-Spectrum/SHARC/issues).

When proposing a feature, please:
- Clearly describe how it should work.
- Keep the scope as narrow as possible to make it easier to implement.
- Keep in mind that this is a volunteer-driven project, and contributions are always welcome!

## Branching Model

SHARC follows a **Git branching model** that helps ensure smooth collaboration and consistent code quality. The branching model is based on Vincent Driessen's excellent post ["A Successful Git Branching Model"](https://nvie.com/posts/a-successful-git-branching-model/).

### Main Branches

The two main branches represent different stages in the development cycle:
- **`master`**: This is the production-ready branch, where the code reflects the latest stable release.
- **`development`**: This branch holds the latest changes and features that will be part of the next release.

Once the `development` branch reaches stability, it is merged into `master` and tagged for release.

### Supporting Branches

These branches are used to facilitate parallel development, fix critical production issues, and prepare for new releases.

- **Feature branches**: For developing new features (e.g., a new propagation model).
  - Branch off from `development`.
  - Merge back into `development`.
  - Naming convention: `feature/<feature-name>` (e.g., `feature-new-antenna`).

- **Release branches**: For preparing a new production release.
  - Branch off from `development`.
  - Merge back into `development` and `master`.
  - Naming convention: `release/<version>` (e.g., `release-1.0.0`).

- **Hotfix branches**: For urgent bug fixes in the production version.
  - Branch off from `master`.
  - Merge back into `development` and `master`.
  - Naming convention: `hotfix/<issue-name>` (e.g., `hotfix-crash-fix`).

## Code Guidelines

### Python

We follow the [PEP8 style guide](https://www.python.org/dev/peps/pep-0008/) for Python code formatting.

#### Type Annotations
All new code should be fully type-annotated. This improves code readability and helps prevent bugs. You can refer to this [type hints cheat sheet for Python 3](https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html) for guidance.

#### Documentation
- All public functions should have docstrings, and these should be updated when making changes.
- We follow the [Google style guide for docstrings](https://google.github.io/styleguide/pyguide.html#383-functions-and-methods).
- For VSCode users, we recommend the [Python Docstring Generator](https://marketplace.visualstudio.com/items?itemName=njpwerner.autodocstring) extension.

Example:

```python
def foo(arg1: str) -> int:
    """Returns the length of arg1.

    Args:
        arg1 (str): The string to calculate the length of.

    Returns:
        int: The length of the provided string.
    """
    return len(arg1)
```

## How to Contribute

### 1. Fork the Repository

Start by forking the repository to your own GitHub account.

### 2. Create a Branch for Your Changes

Create a new branch to work on your feature or bugfix:

```bash
$ git checkout -b name-of-your-bugfix-or-feature
```

### 3. Make Your Changes Locally

Make your changes, ensuring you follow the coding and documentation guidelines.

### 4. Test Your Changes

Before committing, ensure that your changes pass the code quality checks and tests:
- Run `flake8` to check code style:
  
  ```bash
  $ flake8 sharc tests
  ```

- Run tests to verify functionality:

  ```bash
  $ python setup.py test   # Or use py.test
  ```

You can install `flake8` and `tox` by running:

```bash
$ pip install flake8 tox
```

### 5. Commit Your Changes

Once you're satisfied with your changes, commit them with a detailed message:

```bash
$ git add .
$ git commit -m "Detailed description of your changes."
```

### 6. Push Your Changes

Push your branch to GitHub:

```bash
$ git push origin name-of-your-bugfix-or-feature
```

### 7. Submit a Pull Request

Submit a pull request through GitHub. Ensure that:
- Your pull request includes tests.
- Documentation is updated if your changes add new functionality.
- The pull request works across Python 2.6, 2.7, 3.3, 3.4, 3.5, and for PyPy (check [Travis CI](https://travis-ci.org/edgar-souza/sharc/pull_requests)).

### Pull Request Guidelines

Before submitting a pull request, check the following:
1. Your pull request should include tests.
2. If adding functionality, update the docs and include the new feature in `README.rst`.
3. Make sure your changes are compatible with all supported Python versions (2.6, 2.7, 3.3-3.5, PyPy).

### Running Tests

To run a specific test, you can run:

```bash
$ py.test tests.test_sharc
```

---