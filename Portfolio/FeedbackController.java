import org.springframework.web.bind.annotation.*;
import java.io.FileWriter;
import java.io.IOException;

@RestController
public class FeedbackController {

    @PostMapping("/submitFeedback")
    public String submitFeedback(@RequestParam String name, @RequestParam String email, @RequestParam String message) {
        // Construct the feedback entry
        String feedbackEntry = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message + "\n\n";
        
        // Define the file path where feedback will be stored
        String filePath = "feedback.txt";  // This is the file where all feedback is stored
        
        // Write feedback to the file
        try (FileWriter writer = new FileWriter(filePath, true)) { // 'true' to append the data
            writer.write(feedbackEntry);
        } catch (IOException e) {
            e.printStackTrace();
            return "Error saving feedback!";
        }
        
        // Return a success message or status (optional)
        return "Feedback submitted successfully!";
    }
}
