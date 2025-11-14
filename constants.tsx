--- a/constants.tsx
+++ b/constants.tsx
@@ -2,8 +2,8 @@
 
 
 import React from 'react';
-import type { Category, Status, SortOption, ReactionType, Sentiment } from './types';
-import { Category as CategoryEnum, Status as StatusEnum, SortOption as SortOptionEnum } from './types';
+import type { Category, Status, SortOption, ReactionType } from './types';
+import { Category as CategoryEnum, Status as StatusEnum, SortOption as SortOptionEnum } from './types';
 
 
 export const CATEGORIES: Category[] = [CategoryEnum.ACADEMICS, CategoryEnum.EVENTS, CategoryEnum.FACILITIES, CategoryEnum.OTHER];
@@ -25,12 +25,6 @@
     [StatusEnum.IMPLEMENTED]: 'bg-green-500/20 text-green-300 border border-green-500/30',
     [StatusEnum.REJECTED]: 'bg-red-500/20 text-red-300 border border-red-500/30',
 };
-
-export const sentimentColors: { [key: string]: string } = {
-  Positive: 'bg-green-500/20 text-green-300 border border-green-500/30',
-  Neutral: 'bg-gray-500/20 text-gray-300 border border-gray-500/30',
-  Negative: 'bg-red-500/20 text-red-300 border border-red-500/30',
-};
 
 // SVG Icon Components
 export const UpvoteIcon = ({ className }: { className?: string }) => (
