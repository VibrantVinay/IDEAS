--- a/types.ts
+++ b/types.ts
@@ -33,8 +33,6 @@
   avatar: string;
 }
 
-export type Sentiment = 'Positive' | 'Neutral' | 'Negative';
-
 export type ReactionType = '👍' | '❤️' | '💡' | '😂';
 
 export interface Reaction {
@@ -52,14 +50,11 @@
   title: string;
   description: string;
   category: Category;
-  tags: string[];
   status: Status;
   upvotes: number;
   downvotes: number;
   comments: Comment[];
   reactions: Reaction[];
   createdAt: number;
   statusUpdatedAt?: number;
   avatar: string;
-  sentiment: Sentiment;
   isAnonymous: boolean;
   isPrivate: boolean;
   author?: {
