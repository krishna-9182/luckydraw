import "../Cssfiles/howtoplay.css"; 
import luckydraw from "../images/luckydraw.jpg";
function Howtoplay() {
    return ( 
        <>
        <div class="howtoplay">
            <h2>📌 How to Play:</h2>
            <ul>
                <li><strong>Join the Chat/Game Room:</strong> Make sure you're present in the official chat where the game is taking place.</li>
                <li><strong>Stay Active:</strong> Participants must stay active in the chat during the game period. Random winners will be selected from active participants.</li>
                <li><strong>Follow the Host's Prompts:</strong> The host will drop questions, challenges, or keywords. Be the first to respond correctly or complete the task to increase your chances of winning.</li>
                <li><strong>Random Draw or Fastest Answer Wins:</strong> The winner will be selected either randomly or based on fastest correct answers (depending on the round).</li>
                <li><strong>No Spamming:</strong> Spamming disqualifies you from winning. One entry per challenge/question only.</li>
                <li><strong>Valid Entry Only:</strong> Make sure your chat name matches your registration or your entry may be invalid.</li>
                <li><strong>Winner Announcement:</strong> Winner will be announced at the end of the game session. Stay until the end to claim your prize!</li>
                <li><strong>Claiming the Prize:</strong> The ₱1000 prize will be sent via GCash / PayPal / Bank Transfer (depending on location). ID or confirmation may be required.</li>
            </ul> 
           
         
        </div>  
           <img src={luckydraw}
         alt="Lucky Draw thumbnail" />
        </>
        
    );
}
export default Howtoplay;
