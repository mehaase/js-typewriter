var poem = [
    "O Me! O Life!\n",
    "by Walt Whitman (1892)\n",
    "\n",
    "Oh me! Oh life! of the questions of these recurring,\n",
    "Of the endless trains of the faithless, of cities fill'd with the foolish,\n",
    "Of myself forever reproaching myself, (for who more foolish than I, and who more faithless?)\n",
    "Of eyes that vainly crave the light, of the objects mean, of the struggle ever renew’d,\n",
    "Of the poor results of all, of the plodding and sordid crowds I see around me,\n",
    "Of the empty and useless years of the rest, with the rest me intertwined,\n",
    "The question, O me! so sad, recurring—What good amid these, O me, O life?\n",
    "\n",
    "       Answer.\n",
    "\n",
    "That you are here—that life exists and identity,\n",
    "That the powerful play goes on, and you may contribute a verse.\n"
];

function animate(typewriter) {
    sequence = [];

    for (var i in poem) {
        sequence.push({
            text: poem[i],
            delayAfter: 1500,
        });
    }

    typewriter.playSequence(sequence);
}
