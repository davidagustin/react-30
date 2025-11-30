<<<<<<< HEAD
import { NextResponse } from 'next/server';
=======
import { NextResponse } from "next/server";
>>>>>>> javascript30-react-edition

/**
 * Health check endpoint for deployment verification
 * Returns 200 OK if the application is running correctly
 */
export async function GET() {
  try {
    // Basic health check - can be extended with database checks, etc.
    return NextResponse.json(
      {
<<<<<<< HEAD
        status: 'healthy',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
      },
      { status: 200 }
=======
        status: "healthy",
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || "development",
      },
      { status: 200 },
>>>>>>> javascript30-react-edition
    );
  } catch (error) {
    return NextResponse.json(
      {
<<<<<<< HEAD
        status: 'unhealthy',
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

=======
        status: "unhealthy",
        error: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}
>>>>>>> javascript30-react-edition
