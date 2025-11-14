--- a/App.tsx
+++ b/App.tsx
@@ -7,7 +7,7 @@
 import { useSuggestions } from './hooks/useSuggestions';
 import { useAuth } from './hooks/useAuth';
 import { useModeration } from './hooks/useModeration';
-import type { ToastMessage, User, View as ViewType, Suggestion, Status, ReactionType, Comment, Category, Sentiment, ModerationLog, ModerationAction } from './types';
+import type { ToastMessage, User, View as ViewType, Suggestion, Status, ReactionType, Comment, Category, ModerationLog, ModerationAction } from './types';
 import { View } from './types';
 import Toast from './components/common/Toast';
 import SplashScreen from './components/SplashScreen';
@@ -29,9 +29,8 @@
   updateProfile: (name: string) => Promise<void>;
   suggestions: Suggestion[];
   addSuggestion: (
-      suggestion: Omit<Suggestion, 'id' | 'upvotes' | 'downvotes' | 'comments' | 'reactions' | 'createdAt' | 'avatar' | 'status' | 'sentiment' | 'isAnonymous' | 'author' | 'isPrivate' | 'statusUpdatedAt'>, 
-      analysis: { category: Category, tags: string[], sentiment: Sentiment },
-      isAnonymous: boolean,
+      suggestion: Omit<Suggestion, 'id' | 'upvotes' | 'downvotes' | 'comments' | 'reactions' | 'createdAt' | 'avatar' | 'status' | 'isAnonymous' | 'author' | 'isPrivate' | 'statusUpdatedAt'>,
+      isAnonymous: boolean,
       isPrivate: boolean,
       user: User | null
   ) => void;
