# Create a New Antenna Model

---

## 1. Setup the Environment

### Directory Structure
1. **Navigate to the base directory:**
   ```bash
   \sharc\antenna
   ```

2. **Create a new Python file:**  
   Use a descriptive and consistent naming convention, such as `antenna_<model_name>.py`.  
   Example:
   ```bash
   antenna_new_model.py
   ```

---

## 2. Define the Antenna Class

### Inheritance and Structure
Your antenna class should inherit from the base `Antenna` class to ensure it integrates smoothly with the Sharc framework.

```python
from sharc.antenna.antenna import Antenna
import numpy as np

class NewAntennaModel(Antenna):
    """
    Custom antenna radiation pattern model.
    Describe the antenna model here.
    """
    
    def __init__(self, parameters):
        super().__init__()
        # Initialize custom parameters
        self.peak_gain = parameters.antenna_gain
        self.bandwidth = parameters.bandwidth
        # Add other necessary parameters
    
    def calculate_gain(self, off_axis_angles):
        """
        Calculate gain for a set of off-axis angles.

        Parameters:
        -----------
        off_axis_angles (np.array): Array of off-axis angles [degrees]

        Returns:
        --------
        gain (np.array): Calculated gain values [dB]
        """
        # Implement your custom gain calculation logic
        angles = np.absolute(off_axis_angles)
        gain = self.peak_gain - 3 * (angles / self.bandwidth)**2
        
        return gain
```

---

## 3. Define Parameter Settings

### Create a Parameter Class
Define a parameter class to encapsulate the antenna model's required parameters. This ensures a clear structure and facilitates easy parameter management.

**File Path:**  
```bash
\sharc\parameters\parameters_<model_name>.py
```

**Example Code:**
```python
class ParametersNewAntenna:
    def __init__(self):
        self.antenna_gain = 30  # Default peak gain [dB]
        self.bandwidth = 10  # Bandwidth of the antenna [degrees]
        # Add additional parameters as needed
```

---

## 4. Implement and Verify the Model

### Create a Test Script
A test script helps validate your model's performance and ensures that the implementation meets design requirements.

**File Path:**  
```bash
\sharc\tests\test_<model_name>.py
```

**Example Test Script:**
```python
import matplotlib.pyplot as plt
import numpy as np
from sharc.parameters.parameters_new_antenna import ParametersNewAntenna
from sharc.antenna.antenna_new_model import NewAntennaModel

# Initialize parameters
params = ParametersNewAntenna()
params.antenna_gain = 35  # Customize for testing

# Instantiate the antenna model
antenna = NewAntennaModel(params)

# Define test angles
off_axis_angles = np.linspace(0, 30, num=1000)

# Calculate gain
gain = antenna.calculate_gain(off_axis_angles)

# Plot the radiation pattern
plt.figure(figsize=(8, 6))
plt.plot(off_axis_angles, gain, label="New Antenna Gain Pattern")
plt.title("Antenna Radiation Pattern")
plt.xlabel("Off-axis Angle [degrees]")
plt.ylabel("Gain [dB]")
plt.legend()
plt.grid(True)
plt.show()
```

---

## 5. Document and Validate

### Comprehensive Testing
1. **Unit Tests:**  
   Create unit tests to verify different functionalities.
2. **Edge Cases:**  
   Test with extreme parameter values to ensure robustness.
3. **Framework Integration:**  
   Verify that the new antenna model integrates correctly with existing systems and does not disrupt other functionalities.

### Documentation Standards
- **Docstrings:**  
  Add clear docstrings to all classes and methods.
- **README Updates:**  
  Update the relevant `README.md` files to include the new model, describing its features and use cases.

---

## 6. Commit and Share Changes

### Version Control Steps
1. **Stage and commit your files:**
   ```bash
   git add \sharc\antenna\antenna_new_model.py
   git commit -m "Add new antenna model: NewAntennaModel"
   ```

2. **Push changes to your repository:**
   ```bash
   git push origin <branch_name>
   ```

---

