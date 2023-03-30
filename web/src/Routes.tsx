// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/home" page={HomePage} name="home" />
      <Route path="/user-details" page={UserDetailsPage} name="userDetails" />
      <Route path="/verify" page={VerifyPage} name="verify" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={ScaffoldLayout} title="Pinneds" titleTo="pinneds" buttonLabel="New Pinned" buttonTo="newPinned">
        <Route path="/pinneds/new" page={PinnedNewPinnedPage} name="newPinned" />
        <Route path="/pinneds/{id:Int}/edit" page={PinnedEditPinnedPage} name="editPinned" />
        <Route path="/pinneds/{id:Int}" page={PinnedPinnedPage} name="pinned" />
        <Route path="/pinneds" page={PinnedPinnedsPage} name="pinneds" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Words" titleTo="words" buttonLabel="New Word" buttonTo="newWord">
        <Route path="/words/new" page={WordNewWordPage} name="newWord" />
        <Route path="/words/{id:Int}/edit" page={WordEditWordPage} name="editWord" />
        <Route path="/words/{id:Int}" page={WordWordPage} name="word" />
        <Route path="/words" page={WordWordsPage} name="words" />
      </Set>
      <Set wrap={ScaffoldLayout} title="ThoughtPatterns" titleTo="thoughtPatterns" buttonLabel="New ThoughtPattern" buttonTo="newThoughtPattern">
        <Route path="/thought-patterns/new" page={ThoughtPatternNewThoughtPatternPage} name="newThoughtPattern" />
        <Route path="/thought-patterns/{id:Int}/edit" page={ThoughtPatternEditThoughtPatternPage} name="editThoughtPattern" />
        <Route path="/thought-patterns/{id:Int}" page={ThoughtPatternThoughtPatternPage} name="thoughtPattern" />
        <Route path="/thought-patterns" page={ThoughtPatternThoughtPatternsPage} name="thoughtPatterns" />
      </Set>
      <Set wrap={ScaffoldLayout} title="CommonNarratives" titleTo="commonNarratives" buttonLabel="New CommonNarrative" buttonTo="newCommonNarrative">
        <Route path="/common-narratives/new" page={CommonNarrativeNewCommonNarrativePage} name="newCommonNarrative" />
        <Route path="/common-narratives/{id:Int}/edit" page={CommonNarrativeEditCommonNarrativePage} name="editCommonNarrative" />
        <Route path="/common-narratives/{id:Int}" page={CommonNarrativeCommonNarrativePage} name="commonNarrative" />
        <Route path="/common-narratives" page={CommonNarrativeCommonNarrativesPage} name="commonNarratives" />
      </Set>
      <Set wrap={ScaffoldLayout} title="WordClouds" titleTo="wordClouds" buttonLabel="New WordCloud" buttonTo="newWordCloud">
        <Route path="/word-clouds/new" page={WordCloudNewWordCloudPage} name="newWordCloud" />
        <Route path="/word-clouds/{id:Int}/edit" page={WordCloudEditWordCloudPage} name="editWordCloud" />
        <Route path="/word-clouds/{id:Int}" page={WordCloudWordCloudPage} name="wordCloud" />
        <Route path="/word-clouds" page={WordCloudWordCloudsPage} name="wordClouds" />
      </Set>
      <Set wrap={ScaffoldLayout} title="VoiceEntries" titleTo="voiceEntries" buttonLabel="New VoiceEntry" buttonTo="newVoiceEntry">
        <Route path="/voice-entries/new" page={VoiceEntryNewVoiceEntryPage} name="newVoiceEntry" />
        <Route path="/voice-entries/{id:Int}/edit" page={VoiceEntryEditVoiceEntryPage} name="editVoiceEntry" />
        <Route path="/voice-entries/{id:Int}" page={VoiceEntryVoiceEntryPage} name="voiceEntry" />
        <Route path="/voice-entries" page={VoiceEntryVoiceEntriesPage} name="voiceEntries" />
      </Set>
      <Set wrap={ScaffoldLayout} title="TextEntries" titleTo="textEntries" buttonLabel="New TextEntry" buttonTo="newTextEntry">
        <Route path="/text-entries/new" page={TextEntryNewTextEntryPage} name="newTextEntry" />
        <Route path="/text-entries/{id:Int}/edit" page={TextEntryEditTextEntryPage} name="editTextEntry" />
        <Route path="/text-entries/{id:Int}" page={TextEntryTextEntryPage} name="textEntry" />
        <Route path="/text-entries" page={TextEntryTextEntriesPage} name="textEntries" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
