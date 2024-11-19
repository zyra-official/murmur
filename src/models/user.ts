import mongoose, { Document, Schema } from "mongoose";

// Enums
enum AccountType {
  USER = "user",
  CREATOR = "creator",
  ADMIN = "admin",
}

enum SubscriptionPlan {
  FREE = "free",
  BASIC = "basic",
  PREMIUM = "premium",
}

// Interfaces
interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  profilePicture?: string;
  displayName?: string;
  location?: string;
  following: mongoose.Types.ObjectId[];
  likedContent: mongoose.Types.ObjectId[];
  playlists: mongoose.Types.ObjectId[];
  preferredGenres: string[];
  language: string;
  isPremium: boolean;
  accountType: AccountType;
  subscriptionPlan: SubscriptionPlan;
  subscriptionEndDate?: Date;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
  // Method signatures
  // getPublicProfile(): Partial<IUser>;
}

// Static methods interface
// interface IUserModel extends Model<IUser> {
//   findByUsername(username: string): Promise<IUser | null>;
// }

// Schema
const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePicture: {
      type: String,
      default: "default-avatar.png",
    },
    displayName: {
      type: String,
      trim: true,
    },
    location: String,
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    // Content Related
    likedContent: [
      {
        type: Schema.Types.ObjectId,
        ref: "Audio",
      },
    ],
    playlists: [
      {
        type: Schema.Types.ObjectId,
        ref: "Playlist",
      },
    ],
    // Preferences
    preferredGenres: [
      {
        type: String,
      },
    ],
    language: {
      type: String,
      default: "en",
    },

    // Account Status
    isPremium: {
      type: Boolean,
      default: false,
    },
    accountType: {
      type: String,
      enum: Object.values(AccountType),
      default: AccountType.USER,
    },
    // Subscription Info
    subscriptionPlan: {
      type: String,
      enum: Object.values(SubscriptionPlan),
      default: SubscriptionPlan.FREE,
    },
    subscriptionEndDate: Date,
    // Activity Tracking
    lastLogin: Date,
  },
  {
    timestamps: true,
  },
);

// // Indexes
// userSchema.index({ username: 1 });
// userSchema.index({ email: 1 });

// Instance methods
// userSchema.methods.getPublicProfile = function(this: IUser): Partial<IUser> {
//   const userObject = this.toObject();
//   const { password, __v, ...publicProfile } = userObject;
//   return publicProfile;
// };

// Static methods
// userSchema.statics.findByUsername = function(username: string): Promise<IUser | null> {
//   return this.findOne({ username });
// };

// Virtual properties example
// userSchema.virtual('fullProfile').get(function(this: IUser) {
//   return `${this.username} (${this.email})`;
// });

// Export the model
// const User = mongoose.model<IUser, IUserModel>("User", userSchema);
const User =
  mongoose.models.UserModel || mongoose.model<IUser>("User", userSchema);
export default User;
