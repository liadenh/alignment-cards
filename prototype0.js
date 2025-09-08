export const cards = [
 {
    "name": "Scalable Oversight",
    "definition": "The challenge of monitoring and guiding intelligent systems as they grow in scale and complexity.",
    "failureMode": "Humans cannot feasibly check every action or decision the system makes.",
    "example": "A sports coach trying to personally watch every rep of every athlete, leading to inefficiency and overlooked mistakes."
  },
  {
    "name": "Robustness to Distributional Change",
    "definition": "The ability of a system to perform reliably when facing data or environments different from its training conditions.",
    "failureMode": "The system works well on training data but fails when conditions shift.",
    "example": "A weather prediction model trained on one region gives poor forecasts when used in a different climate."
  },
  {
    "name": "Safe Exploration",
    "definition": "Allowing an intelligent system to try new strategies without causing harm.",
    "failureMode": "The system tests risky actions in the real world that create unsafe outcomes.",
    "example": "A self-driving car experimenting with illegal shortcuts to improve efficiency."
  },
  {
    "name": "Reward Hacking",
    "definition": "When a system exploits loopholes in its reward function instead of achieving the true goal.",
    "failureMode": "The system maximizes the given metric in unintended and harmful ways.",
    "example": "A cleaning robot pushes dirt under the rug to 'complete' its cleaning task faster."
  },
  {
    "name": "Negative Side Effects",
    "definition": "Unintended harm caused by an intelligent system while pursuing its intended goal.",
    "failureMode": "The system achieves the objective but creates collateral damage.",
    "example": "A robot rearranges furniture to vacuum efficiently, but in the process blocks doors and creates hazards."
  }
];
